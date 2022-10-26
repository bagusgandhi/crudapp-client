import { Tab } from '@headlessui/react'
import Login from '../components/Login';
import Register from '../components/Register';
import { useAuth } from '../context/AuthContext'

export default function Auth(){

    const { auth, tabs } =  useAuth();

    return (
        <div className="w-full max-w-xl px-2 py-16 sm:px-0 mx-auto h-screen py-40">
            <Tab.Group>
                <Tab.List className="flex space-x-4 rounded-xl p-1">
                    {tabs.map((tab, index) => (
                        <Tab 
                            key={index}
                            className='w-full py-4 text-lg font-medium text-black rounded-xl focus:outline-none'
                        >
                            {tab}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-6">
                    <Tab.Panel className="rounded-xl bg-white px-6 py-10 grid gap-4 grid-cols-1">
                        <Login />
                    </Tab.Panel>
                    <Tab.Panel className="rounded-xl bg-white px-6 py-10 grid gap-4 grid-cols-1">
                        <Register />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}